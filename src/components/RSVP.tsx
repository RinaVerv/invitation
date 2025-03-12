import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface FormData {
  name: string;
  email: string;
  numberOfGuests: number;
  dietaryRequirements: string;
  message: string;
  attending: 'yes' | 'no';
}

/* const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_ANON_KEY || ''
); */

export default function RSVP() {
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    /*   try {
      const { error } = await supabase
        .from('rsvp_responses')
        .insert([data]);

      if (error) throw error;

      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    } */
  };

  return (
    <section
      id='rsvp'
      className='relative py-24 overflow-hidden bg-gradient-to-b from-primary-50/90 to-white/95 backdrop-blur-md'
    >
      <div className='absolute inset-0 bg-grid-primary-100/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none' />
      <div className='relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12 space-y-3'
        >
          <h2 className='text-5xl font-vibe text-primary-900 tracking-tight font-medium'>
            Анкета гостя
          </h2>
          <p className='text-lg text-primary-700/90 font-light'>
            Будем очень признательны если вы сообщите нам о своем решении до 01.07.2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-6 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl ring-1 ring-primary-900/10 hover:shadow-2xl transition-shadow duration-300'
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type='email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='attending'
                rules={{ required: 'Please select an option' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Will you attend?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select an option' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='yes'>Yes, I will attend</SelectItem>
                        <SelectItem value='no'>No, I cannot attend</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='numberOfGuests'
                rules={{
                  required: 'Number of guests is required',
                  min: { value: 1, message: 'Minimum 1 guest' },
                  max: { value: 5, message: 'Maximum 5 guests' },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <Input type='number' min='1' max='5' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='dietaryRequirements'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dietary Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Please let us know if you have any dietary requirements'
                        className='resize-none'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Leave a message for the couple'
                        className='resize-none'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className='text-center'>
                <Button
                  type='submit'
                  disabled={form.formState.isSubmitting}
                  className='w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  {form.formState.isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
