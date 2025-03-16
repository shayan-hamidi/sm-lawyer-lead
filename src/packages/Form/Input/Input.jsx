import { Controller, useFormContext } from "react-hook-form";
import { useExtractErrorInfo } from "../useExtractErrorInfo";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";

export default function MainInput({
  name,
  inputProps,
  defaultValue,
  rules,
  value,
  prePendIcon,
}) {
  const {
    control,

    formState: { errors, isSubmitted },
  } = useFormContext();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value: changeVlaue } }) => (
        <div className="flex flex-col relative">
          {prePendIcon && (
            <div className="absolute top-3 right-3">{prePendIcon}</div>
          )}
          <input
            {...inputProps}
            onChange={(e) => {
              onChange(e.target.value.trimStart());
            }}
            value={changeVlaue || value || ""}
            className={`main-nput min-h-[35px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] ${
              prePendIcon && " !pr-[45px] "
            } ${errorI18nKey ? "main-nputError" : ""}`}
          />
          {/* {isSubmitted && (
            <div className="absolute left-2 top-3">
              {errorI18nKey ? (
                <ErrorOutlineIcon sx={{ color: "#dc3545" }} fontSize="small" />
              ) : (
                <CheckIcon sx={{ color: "#198754" }} fontSize="small" />
              )}
            </div>
          )} */}
          <div style={{ marginTop: "10px", color: "#dc3545",fontSize:14 }}>
            {errorI18nKey && <span>{errorI18nKey}</span>}
          </div>
        </div>
      )}
    />
  );
}
