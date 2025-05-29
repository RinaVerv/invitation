"use client";

import { createRSVP, deleteRSVP, updateRSVP } from "@/actions/rsvp-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Edit2, Loader2, Plus, Trash2, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SelectRsvp } from "@/db/schema/rsvp-schema";

// Type for a RSVP from the database
interface DBRsvp {
  id: number;
  name: string;
  attendance: string;
  guests: number;
  menu_preference: string | null;
  alcohol_preferences: string[] | null;
  created_at: Date;
  updated_at: Date;
}

// Type for RSVP form data
interface RSVPFormData {
  name: string;
  attendance: string;
  guests: number;
  menu_preference: string;
  alcohol_preferences: string[];
}

interface RSVPGridProps {
  initialPrompts: SelectRsvp[];
}

// Type for sorting
type SortField = 'attendance' | 'guests' | null;
type SortDirection = 'asc' | 'desc';

export const RSVPGrid = ({ initialPrompts }: RSVPGridProps) => {
  // State for RSVPs and UI
  const [rsvps, setRsvps] = useState<DBRsvp[]>(initialPrompts);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // Loading states
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form state
  const [formData, setFormData] = useState<RSVPFormData>({
    name: "",
    attendance: "",
    guests: 1,
    menu_preference: "",
    alcohol_preferences: []
  });

  // Custom colors for charts
  const chartColors = {
    menu: {
      primary: '#9f7aea', // Purple
      secondary: '#d6bcfa',
      background: '#faf5ff'
    },
    alcohol: {
      primary: '#4299e1', // Blue
      secondary: '#90cdf4',
      background: '#ebf8ff'
    }
  };

  // Custom tooltip style
  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      value: number;
    }>;
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {payload[0].value} гостей
          </p>
        </div>
      );
    }
    return null;
  };

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to start editing a RSVP
  const startEditing = (rsvp: DBRsvp) => {
    setFormData({
      name: rsvp.name,
      attendance: rsvp.attendance,
      guests: rsvp.guests,
      menu_preference: rsvp.menu_preference || "",
      alcohol_preferences: rsvp.alcohol_preferences || []
    });
    setEditingId(rsvp.id);
    setError(null);
  };

  // Function to handle form submission (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    try {
      if (editingId) {
        // Update existing RSVP
          const updatedRSVP = await updateRSVP({ id: editingId, ...formData });
        setRsvps((prev) => prev.map((r) => (r.id === editingId ? updatedRSVP : r)));
        setEditingId(null);
      } else {
        // Create new RSVP
        const newRSVP = await createRSVP(formData);
        setRsvps((prev) => [newRSVP, ...prev]);
        setIsCreating(false);
      }
      setFormData({
        name: "",
        attendance: "",
        guests: 1,
        menu_preference: "",
        alcohol_preferences: []
      });
    } catch (err) {
      console.error("Failed to save RSVP:", err);
      setError("Failed to save RSVP. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Function to handle RSVP deletion
  const handleDelete = async (id: number) => {
    setIsDeleting(true);
    try {
      await deleteRSVP(id);
      setRsvps((prev) => prev.filter((r) => r.id !== id));
      setDeletingId(null);
    } catch (err) {
      console.error("Failed to delete RSVP:", err);
      setError("Failed to delete RSVP. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Function to handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Sort RSVPs
  const sortedRsvps = [...rsvps].sort((a, b) => {
    if (!sortField) return 0;

    if (sortField === 'attendance') {
      const result = a.attendance.localeCompare(b.attendance);
      return sortDirection === 'asc' ? result : -result;
    }

    if (sortField === 'guests') {
      const result = a.guests - b.guests;
      return sortDirection === 'asc' ? result : -result;
    }

    return 0;
  });

  // Function to check if attendance is confirmed
  const isAttendanceConfirmed = (attendance: string) => {
    return attendance.toLowerCase().includes('yes') || 
           attendance.toLowerCase().includes('да') || 
           attendance.toLowerCase().includes('приду');
  };

  // Function to prepare data for menu preferences chart
  const getMenuPreferencesData = () => {
    const menuData = rsvps
      .filter(rsvp => isAttendanceConfirmed(rsvp.attendance))
      .reduce((acc, rsvp) => {
        const preference = rsvp.menu_preference || 'Не указано';
        acc[preference] = (acc[preference] || 0) + rsvp.guests;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(menuData).map(([name, value]) => ({
      name,
      value
    }));
  };

  // Function to prepare data for alcohol preferences chart
  const getAlcoholPreferencesData = () => {
    const alcoholData = rsvps
      .filter(rsvp => isAttendanceConfirmed(rsvp.attendance))
      .reduce((acc, rsvp) => {
        const preferences = rsvp.alcohol_preferences || ['Не указано'];
        preferences.forEach(pref => {
          acc[pref] = (acc[pref] || 0) + rsvp.guests;
        });
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(alcoholData).map(([name, value]) => ({
      name,
      value
    }));
  };

  if (rsvps.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">Пока нет ответов на приглашение. Добавьте первый ответ!</p>
      </div>
    );
  }

  return (
    <>
      {/* Create RSVP button and statistics */}
      <div className="mb-6 flex justify-between items-center">
        <div className="space-y-2">
          <div className="text-lg font-medium font-cormorant-sc">
            Всего гостей: {rsvps.reduce((sum, rsvp) => sum + rsvp.guests, 0)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 font-cormorant-sc">
            Подтвердили: {rsvps
              .filter(rsvp => isAttendanceConfirmed(rsvp.attendance))
              .reduce((sum, rsvp) => sum + rsvp.guests, 0)} / {rsvps.reduce((sum, rsvp) => sum + rsvp.guests, 0)} гостей
          </div>
        </div>
        <Button
          onClick={() => {
            setIsCreating(true);
            setFormData({
              name: "",
              attendance: "",
              guests: 1,
              menu_preference: "",
              alcohol_preferences: []
            });
          }}
          className="gap-2 font-cormorant-sc"
        >
          <Plus className="w-5 h-5" />
          Добавить ответ
        </Button>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Menu Preferences Chart */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <CardTitle className="text-purple-700 dark:text-purple-300 font-cormorant-sc">Предпочтения в меню</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getMenuPreferencesData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="menuGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chartColors.menu.primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={chartColors.menu.secondary} stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#4a5568', fontFamily: 'var(--font-cormorant-sc)' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis
                    tick={{ fill: '#4a5568', fontFamily: 'var(--font-cormorant-sc)' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="value"
                    fill="url(#menuGradient)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={60}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Alcohol Preferences Chart */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardTitle className="text-blue-700 dark:text-blue-300 font-cormorant-sc">Предпочтения в алкоголе</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getAlcoholPreferencesData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="alcoholGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chartColors.alcohol.primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={chartColors.alcohol.secondary} stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#4a5568', fontFamily: 'var(--font-cormorant-sc)' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis
                    tick={{ fill: '#4a5568', fontFamily: 'var(--font-cormorant-sc)' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="value"
                    fill="url(#alcoholGradient)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={60}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog
        open={isCreating || !!editingId}
        onOpenChange={(open) => {
          if (!open) {
            setIsCreating(false);
            setEditingId(null);
            setFormData({
              name: "",
              attendance: "",
              guests: 1,
              menu_preference: "",
              alcohol_preferences: []
            });
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-cormorant-sc">{editingId ? "Редактировать ответ" : "Добавить ответ"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-cormorant-sc">Имя</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Введите имя"
                  className="font-cormorant-sc"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="attendance" className="font-cormorant-sc">Присутствие</Label>
              <Input
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleInputChange}
                required
                placeholder="Придете ли вы?"
                className="font-cormorant-sc"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests" className="font-cormorant-sc">Количество гостей</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="font-cormorant-sc"
              />
            </div>
            {error && <p className="text-red-500 text-sm font-cormorant-sc">{error}</p>}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsCreating(false);
                  setEditingId(null);
                  setFormData({
                    name: "",
                    attendance: "",
                    guests: 1,
                    menu_preference: "",
                    alcohol_preferences: []
                  });
                }}
                disabled={isSaving}
                className="font-cormorant-sc"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                disabled={isSaving}
                className="font-cormorant-sc"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {editingId ? "Сохранение..." : "Создание..."}
                  </>
                ) : editingId ? (
                  "Сохранить изменения"
                ) : (
                  "Создать"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog
        open={!!deletingId}
        onOpenChange={(open) => !open && setDeletingId(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-cormorant-sc">Удалить ответ</DialogTitle>
            <DialogDescription className="font-cormorant-sc">Вы уверены, что хотите удалить этот ответ? Это действие нельзя отменить.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeletingId(null)}
              disabled={isDeleting}
              className="font-cormorant-sc"
            >
              Отмена
            </Button>
            <Button
              variant="destructive"
              onClick={() => deletingId && handleDelete(deletingId)}
              disabled={isDeleting}
              className="font-cormorant-sc"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Удаление...
                </>
              ) : (
                "Удалить"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* RSVPs table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 font-cormorant-sc">Имя</th>
              <th 
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 font-cormorant-sc"
                onClick={() => handleSort('attendance')}
              >
                <div className="flex items-center gap-2">
                  Присутствие
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 font-cormorant-sc"
                onClick={() => handleSort('guests')}
              >
                <div className="flex items-center gap-2">
                  Гости
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 font-cormorant-sc">Предпочтения в меню</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 font-cormorant-sc">Предпочтения в алкоголе</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300 font-cormorant-sc">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {sortedRsvps.map((rsvp) => (
              <motion.tr
                key={rsvp.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100 font-cormorant-sc">{rsvp.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 font-cormorant-sc">{rsvp.attendance}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 font-cormorant-sc">{rsvp.guests}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 font-cormorant-sc">{rsvp.menu_preference || "Нет"}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 font-cormorant-sc">
                  {rsvp.alcohol_preferences?.join(", ") || "Нет"}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => startEditing(rsvp)}
                      title="Редактировать ответ"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeletingId(rsvp.id)}
                      title="Удалить ответ"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

