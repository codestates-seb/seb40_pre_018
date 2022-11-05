/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as AlertIcon } from '../assets/images/alert.svg';
import { Editor } from '@toast-ui/react-editor';
import { CommonButton } from './Buttons';
import { useSelector } from 'react-redux';
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

const LoginAlert = styled.span`
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;

  .link {
    color: var(--blue-600);
  }
`;

const AnswerForm = ({ initialValue, onClickHandler }) => {
  const editorRef = useRef();
  const { user } = useSelector((state) => state.loginReducer);
  const [isFocused, setIsFocused] = useState(false);
  const [bodyLength, setBodyLength] = useState(0);
  const [isError, setIsError] = useState(false);
  const [body, setBody] = useState(false);
  const isValid = user && bodyLength >= 30;

  const onSubmit = () => {
    if (!isError) {
      onClickHandler(body);
    }
  };

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    setBody(data);
    setBodyLength(data.length);
    bodyLength <= 30 ? setIsError(true) : setIsError(false);
  };

  return (
    <div>
      <EditorWrapper focus={isFocused} error={isError}>
        <Editor
          ref={editorRef}
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
      <CommonButton
        bgColor="var(--blue-500)"
        color="#fff"
        border="transparent"
        className="submit-answer-btn"
        onClick={onSubmit}
        disabled={!isValid}
      >
        Post Your Answer
      </CommonButton>
      {!user && (
        <LoginAlert>
          <Link to="/signup" className="link">
            Sign up
          </Link>
          or
          <Link to="/login" className="link">
            Log in
          </Link>
        </LoginAlert>
      )}
    </div>
  );
};

export default AnswerForm;
