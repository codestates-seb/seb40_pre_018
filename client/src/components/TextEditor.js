import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';

// 코드 하이라이팅 용도
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const TextEditor = ({ onChangeHandler, initialValue }) => {
  // DOM 선택용
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    onChangeHandler(data);
  };

  return (
    <div>
      <Editor
        ref={editorRef} // DOM 선택용
        initialValue={initialValue || ' '}
        height="250px"
        useCommandShortcut={true}
        initialEditType="wysiwyg"
        previewStyle="tab"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'code', 'strike'],
          ['link', 'quote', 'codeblock', 'image', 'table'],
          ['ol', 'ul', 'hr'],
        ]}
        onChange={onChange}
      />
    </div>
  );
};

export default TextEditor;
