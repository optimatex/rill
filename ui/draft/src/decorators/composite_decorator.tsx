import { CompositeDecorator } from 'draft-js';
import Link from './link.decorator';
import NodeLink from './node_link.decorator';
import Image from './images.decorator';

const compositeDecorator = new CompositeDecorator([Link, NodeLink, Image]);

export default compositeDecorator;
