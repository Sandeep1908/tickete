import ViewPage from "@/components/ViewPage";
import React from "react";

import LeftForm from "@/components/LeftForm";
import FQ from "@/components/FQ";

function page() {
  return (
    <div className="w-full p-3  ">
      <div className="w-full md:max-w-[95%] flex gap-7 flex-col-reverse  m-auto md:flex-row md:p-10">
        <LeftForm />

        <ViewPage />
      </div>

      <FQ />
    </div>
  );
}

export default page;
