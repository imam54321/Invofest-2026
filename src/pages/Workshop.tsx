import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataWorkshop } from "../utils/datas";
// import CustomSpeaker from "@/components/custom/CustomSpeaker";
import EventWorkshop from "@/components/custom/EventsWorkshop";
const Workshop = () => {
  TitlePage("Workshop");

  return (
    <GeneralLayout 
      {...dataWorkshop}
      phoneNumber="6289666861497"
      waMessage="Halo Kak, Saya Ingin Bertanya mengenai Workshop Invofest 2026..."
      >
      {/* <CustomSpeaker data={dataWorkshop.speakers} /> */}
      <EventWorkshop data={dataWorkshop.events} />
    </GeneralLayout>
  );
};

export default Workshop;
