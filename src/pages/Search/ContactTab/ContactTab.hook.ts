import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSearchValidationSchema } from "~/helpers/schemaValidation.helper";
import { useMemo } from "react";

const useContactTab = () => {
  const form = useForm({
    resolver: yupResolver(contactSearchValidationSchema),
  });

  const formValueString = JSON.stringify(form.watch());
  const isCanSubmit = useMemo(() => {
    const formValue = JSON.parse(formValueString);
    const valueFormField = Object.values(formValue || {});
    return valueFormField.some((e) => (e as string | Array<any>).length);
  }, [formValueString]);

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log("data: ", data);
  });

  return {
    form,
    handleSubmit,
    isCanSubmit,
  };
};

export default useContactTab;
