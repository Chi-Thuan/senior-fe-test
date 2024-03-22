import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { SOCIAL_TYPE } from "~/constants/common";

interface IProps {
  type: SOCIAL_TYPE;
  url: string;
}
const SocialMediaItem = (props: IProps) => {
  const IconMapping = {
    [SOCIAL_TYPE.LINKED]: FaLinkedin,
    [SOCIAL_TYPE.FACEBOOK]: FaFacebookSquare,
    [SOCIAL_TYPE.TWITTER]: FaTwitterSquare,
  };

  const Icon = IconMapping[props.type];

  return (
    <a href={props.url} target="_blank0">
      {<Icon />}
    </a>
  );
};

export default SocialMediaItem;
