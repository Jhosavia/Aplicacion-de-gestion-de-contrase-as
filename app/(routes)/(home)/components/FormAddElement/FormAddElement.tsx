"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormAddElement.form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"



export function FormAddElement() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        typeElement: {
            typeElement: "",
            isFavourite: false,
            name: "",
            directory: "",
            username: "",
            password:"",
            urlWebsite:"",
            notes:"",
            userId: "asdsf",
        }
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="md:grid-cols-2 gap-y-2 gap-x-4 grid">
        <FormField
          control={form.control}
          name="typeElement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Qué tipo de elemento necesitas?</FormLabel>
              <Select onValueChange={field.onChange} 
              defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select a directory for your password" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Inicio de sesion">
                    Inicio de sesion
                </SelectItem>
                <SelectItem value="Tarjeta">Tarjeta</SelectItem>
                <SelectItem value="Identidad">Identidad</SelectItem>
              </SelectContent>
              <FormDescription>
              </FormDescription>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isFavourite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ¿Quieres seleccionar tu contraseña como favorita?
              </FormLabel>
              <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                <FormControl>
                    <Checkbox checked={field.value}
                    onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                    <FormLabel>Marcar como favorito</FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
        control={form.control}
        name="name"
        render={({field}) =>(
            <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
          <FormField
          control={form.control}
          name="directory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Directorio</FormLabel>
              <Select onValueChange={field.onChange} 
              defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Elige el directorio" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Social">Social</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Shopping">Shopping</SelectItem>
              </SelectContent>
              <FormDescription>
              </FormDescription>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    </div>
  )
}
