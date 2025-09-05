import { Label as CoreLabel } from "../../core/components/label";
import { LabelProps } from "./LabelProps";
export const Label = ({ label, ...props }: LabelProps) => {
  return <CoreLabel {...props}>{label}</CoreLabel>;
};

export default Label;
