import { React } from '_employee/view';

// import {Link} from '../Link'
import { Image } from './Image';

interface IProps {
  src: string;
}
// <Link to={`${props.src}?image=`}>
export const PreviewImage = (props: IProps) => <Image src={props.src} />;
