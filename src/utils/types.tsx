export type snackbarType ={
    isOpen:boolean,
    message: string,
    isError: boolean,
  }

export type TextAreaType = {
    modalHandler: (value: boolean) => void;
    isModalOpen: boolean;
    data: string;
    handler:(data:string)=>void;
    componentTitle: string;
    index:number
  }


 export type TextAreaHOCType = {
    WrappedComponent:React.FunctionComponent<TextAreaType>
    handler:(value:string) => void;
    data:string;
    componentTitle:string;
  
}


export type TextFeildType = {
  field_value : string;
  handler:(data:string)=> void;
  index:number;
}

export type aiContentType = {
  isLoading: boolean;
  textData: string;
  isError:boolean;
}

export type IntroLeftType = {
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}
export type IntroMainType = {
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}


