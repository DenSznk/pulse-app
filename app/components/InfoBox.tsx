export type ButtonInfo = {
  text: string;
  link: string;
  backgroundColor: string;
};

export type InfoBoxProps = {
  heading: string;
  background: string;
  textColor: string;
  childrenText: string;
  buttonInfo: ButtonInfo;
};

const InfoBox = ({
  heading,
  background,
  textColor,
  childrenText,
  buttonInfo,
}: InfoBoxProps) => {
    return (
        <div className={`${background} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColor} mt-2 mb-4`}>{childrenText}</p>
        <a
          href={buttonInfo.link}
          className={`inline-block
            ${buttonInfo.backgroundColor}
            text-white
            rounded-lg
            px-4
            py-2
            hover: opacity-80`}
        >
          {buttonInfo.text}
        </a>
      </div>
    )

};

export default InfoBox;
