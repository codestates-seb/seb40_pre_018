import { Viewer } from '@toast-ui/react-editor';

// 코드 하이라이팅 용도
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

export const ContentViewer = ({ content }) => {
  return (
    <>
      <Viewer
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        initialValue={content || ''}
      />
    </>
  );
};
