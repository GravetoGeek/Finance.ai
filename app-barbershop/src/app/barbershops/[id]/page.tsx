import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsPageProps {
   params: {
      id?: string;
   };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
   
   if(!params.id){
      // TODO: redirecionar para home-page
      return null;
   }
   
   const barbershop = await db.barbershop.findUnique({
      where: {
         id: params.id,
      },

      // Inclui LEFT-JOIN em services
      include: {
         services: true,
      }
   });

   if(!barbershop){
      // TODO: redirecionar para home-page
      return null;
   }

   return ( 
      <div className="px-5 flex flex-col gap-4 py-6">
         <BarbershopInfo barbershop={barbershop} />

         {barbershop.services.map(service => (
            <ServiceItem key={service.id} service={service} />
         ))}
      </div>
   );
};
 
export default BarbershopDetailsPage;