import { CoreServices } from "@/components/landing/CoreServices";
import { IdealClient } from "@/components/landing/IdealClient";
import { Pricing } from "@/components/landing/Pricing";

const HomeSectionsPrimary = () => {
  return (
    <>
      <CoreServices />
      <IdealClient />
      <Pricing />
    </>
  );
};

export default HomeSectionsPrimary;
