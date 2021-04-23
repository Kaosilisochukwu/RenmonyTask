declare global {
  type InputProps = {
    name: string;
    type: string;
    placeholder?: string;
    label: string;
    styles?: React.CSSProperties;
    conainerStyle?: React.CSSProperties;
    register: any;
    error: boolean | undefined;
    errorMessage?: string;
  };
  type SelectProps = {
    name: string;
    items: Array<string>;
    onSelect?: (e: any) => void;
    label: string;
    styles?: React.CSSProperties;
    conainerStyle?: React.CSSProperties;
    register: any;
    error: boolean | undefined;
    errorMessage?: string;
  };
  type UserDetails = {
    eligibilityCheck: any;
    personalDetails: any;
    employmentDetails: any;
  };
}

export {};
