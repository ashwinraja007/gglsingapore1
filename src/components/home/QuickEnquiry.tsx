import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface EnquiryForm {
  fullName: string;
  phone: string;
  email: string;
  purpose: string;
  comment: string;
}

export const QuickEnquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EnquiryForm>();

  const onSubmit = async (data: EnquiryForm) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            Quick Enquiry
          </h2>
          <p className="text-gray-600">
            Have a question? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {submitStatus === 'success' && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Success!</AlertTitle>
            <AlertDescription className="text-green-700">
              Your enquiry has been submitted successfully. We'll contact you soon.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Error</AlertTitle>
            <AlertDescription className="text-red-700">
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-700">Full Name*</Label>
              <Input 
                id="fullName"
                className={errors.fullName ? "border-red-300 focus:border-red-500" : ""}
                {...register("fullName", { 
                  required: "Full name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" }
                })} 
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700">Phone Number*</Label>
              <Input 
                id="phone"
                className={errors.phone ? "border-red-300 focus:border-red-500" : ""}
                {...register("phone", { 
                  required: "Phone number is required",
                  pattern: { value: /^[0-9+-]+$/, message: "Please enter a valid phone number" }
                })} 
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email*</Label>
              <Input 
                id="email" 
                type="email"
                className={errors.email ? "border-red-300 focus:border-red-500" : ""}
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email" }
                })} 
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose" className="text-gray-700">Purpose*</Label>
              <Input 
                id="purpose"
                className={errors.purpose ? "border-red-300 focus:border-red-500" : ""}
                {...register("purpose", { 
                  required: "Purpose is required",
                  minLength: { value: 3, message: "Purpose must be at least 3 characters" }
                })} 
              />
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment" className="text-gray-700">Comment*</Label>
            <Textarea 
              id="comment"
              className={errors.comment ? "border-red-300 focus:border-red-500" : ""}
              {...register("comment", { 
                required: "Comment is required",
                minLength: { value: 10, message: "Comment must be at least 10 characters" }
              })} 
            />
            {errors.comment && (
              <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full hover:bg-blue-600 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Enquiry'
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuickEnquiry;
