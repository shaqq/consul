import Serializer from './application';
import { PRIMARY_KEY, SLUG_KEY } from 'consul-ui/models/proxy';

export default Serializer.extend({
  primaryKey: PRIMARY_KEY,
  slugKey: SLUG_KEY,
});
