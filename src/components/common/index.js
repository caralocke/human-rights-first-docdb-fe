import FormButton from './FormButton';
import FormInput from './FormInput';
import List from './List';
import LoadingComponent from './LoadingComponent';
import Button from './Button';
import ReduxList from './ReduxList';
import Tags from './Tags/Tags';
import ColTag from './ColTag/ColTag';
import Header from './Header/Header';
import TagsList from './Tags/TagsList';
import ColTagList from './ColTag/ColTagList';

// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export {
  FormButton,
  FormInput,
  List,
  LoadingComponent,
  Button,
  ReduxList,
  Tags,
  ColTag,
  Header,
  TagsList,
  ColTagList,
};
