import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as AlertIcon } from '../assets/images/alert.svg';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

// 코드 하이라이팅 용도
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const EditorWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid var(--black-200);
  box-shadow: none;
  position: relative;

  .alert-icon {
    position: absolute;
    top: 50%;
    right: 0.7em;
    margin-top: -9px;
    pointer-events: none;
  }

  ${(props) =>
    props.focus &&
    !props.error &&
    css`
      box-shadow: 0px 0px 0px 4px var(--powder-100);
      border-color: var(--blue-600);
    `}

  ${(props) =>
    props.focus &&
    props.error &&
    css`
      box-shadow: 0px 0px 0px 4px var(--red-100);
    `}

  ${(props) =>
    props.error &&
    css`
      border-color: var(--red-400);
    `}
`;

const ErrorMessage = styled.p`
  margin: 4px 0 0;
  padding: 2px;
  color: var(--red-500);
  font-size: 12px;
`;

const TextEditor = ({ onChangeHandler, initialValue }) => {
  const editorRef = useRef(); // DOM 선택용
  const [isFocused, setIsFocused] = useState(false);
  const [bodyLength, setBodyLength] = useState(0);
  const [isError, setIsError] = useState(false);

  // body 길이 검사하는 함수
  const checkLength = (body) => {
    setBodyLength(body.length);
  };

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    onChangeHandler(data); // Props로 받은 setState에 data 전달
    checkLength(data); // 데이터의 길이를 검사해서 유효성 검사
    bodyLength <= 30 ? setIsError(true) : setIsError(false);
  };
  return (
    <div>
      <EditorWrapper focus={isFocused} error={isError}>
        <Editor
          ref={editorRef} // DOM 선택용
          initialValue={initialValue || ' '}
          height="250px"
          autofocus={false}
          initialEditType="wysiwyg"
          previewStyle="tab"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'code', 'strike'],
            ['link', 'quote', 'codeblock', 'image', 'table'],
            ['ol', 'ul', 'hr'],
          ]}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isError && <AlertIcon fill="var(--red-400)" className="alert-icon" />}
      </EditorWrapper>
      {isError && (
        <ErrorMessage>
          Body must be at least 30 characters; you entered {bodyLength}
        </ErrorMessage>
      )}
    </div>
  );
};

export default TextEditor;
