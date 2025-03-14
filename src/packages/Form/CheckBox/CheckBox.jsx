import { Controller, useFormContext } from "react-hook-form";
import { useExtractErrorInfo } from "../useExtractErrorInfo";
import { useState } from "react";

export default function MainCheckBox({ name, defaultValue, rules, items }) {
  const {
    control,
    formState: { errors, isSubmitted },
  } = useFormContext();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange } }) => (
        <div className="flex gap-2">
          {items.map((item) => (
            <div className="flex gap-2" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                onChange={() => {
                  setSelectedCheckbox(item.id);
                  onChange(item.id);
                }}
                checked={selectedCheckbox === item.id}
                value={item.id}
                className={"min-w-[20px]"}
              />
              <label
                className={`${
                  isSubmitted && errorI18nKey
                    ? "!text-[#dc3545]"
                    : isSubmitted && !errorI18nKey
                    ? "!text-[#198754]"
                    : ""
                } text-[20px] font-bold text-[#24356e]`}
                htmlFor={item.id}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
    />
  );
}
