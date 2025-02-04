import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface EnquiryForm {
  fullName: string;
  phone: string;
  email: string;
  purpose: string;
  comment: string;
}

export const QuickEnquiry = () => {
  const { register, handleSubmit } = useForm<EnquiryForm>();

  const onSubmit = (data: EnquiryForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Enquiry</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name*</Label>
              <Input id="fullName" {...register("fullName", { required: true })} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input id="phone" {...register("phone", { required: true })} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">E Mail*</Label>
              <Input id="email" type="email" {...register("email", { required: true })} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose*</Label>
              <Input id="purpose" {...register("purpose", { required: true })} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Comment*</Label>
            <Textarea id="comment" {...register("comment", { required: true })} />
          </div>

          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>
    </section>
  );
};