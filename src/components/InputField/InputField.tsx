import { useState } from "react";
import type { InputFieldProps } from "./InputField.types";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";

export default function InputField(props: InputFieldProps) {
    const { value, onChange, label, placeholder, helperText, disabled, loading, invalid, errorMessage, variant, size } = props;
    let [showPassword, setShowPassword] = useState(false);

    const inputBaseClasses = `w-full min-w-0 sm:min-w-[275px] mb-1 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ${value!==""? "pr-14" : "pr-9"}`;
    let inputVariantClasses = "";
    if (variant === "filled") {
        inputVariantClasses = "bg-gray-50/50 border  border-gray-400";
    } else if (variant === "outlined") {
        inputVariantClasses = "bg-gray-50/50 border-2 border-black";
    } else if (variant === "ghost") {
        inputVariantClasses = "bg-transparent border border-transparent focus:border-gray-400 focus:ring-0";
    }
    let sizeClasses = "";
    if (size === "sm") {
        sizeClasses = "text-sm p-2";
    } else if (size === "md") {
        sizeClasses = "text-base p-3";
    } else if (size === "lg") {
        sizeClasses = "text-lg p-4";
    }
    return (
        <>
            <div className="h-[120px] mb-[7rem]">
                <h2 className="mb-5 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl mdz:text-5xl">Input Field</h2>
                <label
                    htmlFor="password"
                    className="block mb-3 text-sm font-medium text-gray-900 pl-[2px]"
                >
                    {label}
                </label>

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className={`${inputBaseClasses} ${inputVariantClasses} ${sizeClasses} ${(disabled || loading) ? 'border-0' : ''}`}

                        placeholder={(loading || disabled) ? "Please wait..." : placeholder}
                        disabled={disabled || loading}
                        value={value}
                        onChange={onChange}
                        aria-invalid={invalid}

                    />
                    {
                        loading &&
                        <div className={`h-4 w-4 border-2 border-gray-500 border-t-blue-500 rounded-full animate-spin absolute right-3 top-1/2 transform -translate-y-1/2 ${value!==""? "-translate-x-6" :  ""}`}></div>
                    }
                    {
                        value !== "" && <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer  ">
                            {showPassword ? <VscEye onClick={() => setShowPassword(false)} /> : <VscEyeClosed onClick={() => setShowPassword(true)} />}
                        </div>
                    }
                </div>

                <p className="text-gray-500 text-[13px] pl-[2px]">
                    {helperText}
                </p>

                {
                    invalid && errorMessage && (
                        <p className="text-red-600 text-[14px] pl-[2px]">
                            {errorMessage}
                        </p>
                    )
                }

            </div>
        </>

    )
}