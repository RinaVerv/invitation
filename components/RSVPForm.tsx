"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createRSVP } from "@/actions/rsvp-actions";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};


const alcoholOptions = [
  "Шампанское",
  "Белое вино",
  "Красное вино",
  "Коньяк",
  "Пиво",
  "Водка",
  "Не буду пить алкоголь",
];

const formSchema = z.object({
  name: z.string().min(1, "Имя и фамилия обязательны для заполнения"),
  attendance: z.enum(["Да", "Нет"]),
  guests: z.string().refine((val) => {
    const num = parseInt(val);
    return !isNaN(num) && num >= 1;
  }, "Укажите количество гостей"),
  menuPreference: z.string().optional(),
  alcoholPreferences: z.array(z.string()).optional(),
});

type FormData = z.infer<typeof formSchema>;

export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      attendance: "Да",
      guests: "1",
      menuPreference: "",
      alcoholPreferences: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await createRSVP({
        name: data.name,
        attendance: data.attendance,
        guests: parseInt(data.guests),
        alcohol_preferences: data.alcoholPreferences || [],
      });
      setIsSuccess(true);
      document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const alcoholSelected = watch("alcoholPreferences") || [];

  const handleCheckbox = (value: string) => {
    if (alcoholSelected.includes(value)) {
      setValue("alcoholPreferences", alcoholSelected.filter((v: string) => v !== value));
    } else {
      setValue("alcoholPreferences", [...alcoholSelected, value]);
    }
  };

  return (
    <section id="rsvp" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-marianna text-5xl md:text-7xl mb-4"
          >
            Придёте?
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-0.5 mx-auto bg-gray-200" 
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='max-w-[470px] mx-auto text-center'
        >
          <motion.p 
            variants={itemVariants}
            className='text-xl font-cormorant-sc font-100 text-zinc-900 mb-8'
          >
            Мы будем признательны, если вы подтвердите своё присутствие за 2 недели до торжества.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {isSuccess ? (
            <motion.div
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-marianna text-zinc-900 mb-4"
              >
                Спасибо!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-cormorant-sc text-zinc-900 mb-8"
              >
                Данные успешно отправлены
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg font-cormorant-sc text-zinc-900"
              >
                Если ваши планы изменятся,<br />
                пожалуйста, сообщите нам
              </motion.p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <Label htmlFor="name" className="font-cormorant-sc text-zinc-800 text-[16px] md:text-[20px] block mb-2">Имя и Фамилия *</Label>
                <Input
                  {...register("name")}
                  id="name"
                  placeholder="Ваше имя и фамилия"
                  className="font-cormorant-sc h-14 w-full text-[16px] md:text-[20px] md:text-[20px]"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 font-cormorant-sc mt-1">{errors.name.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <Label className="font-cormorant-sc text-zinc-800 text-[16px] md:text-[20px]">Подтвердите свое присутствие:</Label>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="yes"
                      {...register("attendance")}
                      value="Да"
                      className="h-6 w-6 accent-zinc-800"
                    />
                    <Label htmlFor="yes" className="font-cormorant-sc text-zinc-800 text-[16px] md:text-[20px]">Я с удовольствием приду</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="no"
                      {...register("attendance")}
                      value="Нет"
                      className="h-6 w-6 accent-zinc-800"
                    />
                    <Label htmlFor="no" className="font-cormorant-sc text-zinc-800 text-[16px] md:text-[20px]">К сожалению, не смогу</Label>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="guests" className="font-cormorant-sc text-zinc-800 text-[16px] md:text-[20px]">Количество гостей включая меня *</Label>
                <Input
                  {...register("guests")}
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  className="font-cormorant-sc h-14 text-[16px] md:text-[20px] md:text-[20px]"
                />
                {errors.guests && (
                  <p className="text-sm text-red-500 font-cormorant-sc">{errors.guests.message}</p>
                )}
              </motion.div>

              {/* Alcohol Preferences Checkboxes */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="font-cormorant-sc text-zinc-800 text-[16px] md:text-[20px]">Какой алкоголь предпочитаете?</Label>
                <div className="flex flex-col gap-3">
                  {alcoholOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer hover:bg-zinc-50 transition">
                      <input
                        type="checkbox"
                        checked={alcoholSelected.includes(option)}
                        onChange={() => handleCheckbox(option)}
                        className="h-6 w-6 accent-zinc-800"
                      />
                      <span className="font-cormorant-sc text-[16px] md:text-[20px]">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Button
                  type="submit"
                  className="w-full font-cormorant-sc bg-zinc-800 hover:bg-zinc-700 text-white text-[16px] md:text-[20px] h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
} 