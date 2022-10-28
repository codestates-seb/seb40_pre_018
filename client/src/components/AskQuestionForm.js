import styled from 'styled-components';
import { CommonButton } from './Buttons';
import { RecommendBody, RecommendTitle } from './Recommends';

const QCFormCommon = styled.div`
  .qc-form {
    display: flex;
    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70%;
      margin: 8px 8px 8px 0;
      padding: 24px;
      flex-shrink: 0;
      background-color: #fff;
      border: 1px solid var(--black-075);
      border-radius: 3px;

      .qc-form-title {
        display: flex;
        flex-direction: column;

        > label {
          color: hsl(210, 8%, 5%);
          font-weight: 600;
          font-size: 15px;
          padding-top: 5px;

          &:last-child {
            font-weight: normal;
            font-size: 13px;
          }
        }
      }

      > div:last-child {
        display: flex;
        width: 100%;

        input {
          width: 100%;
          padding: 8px 9px;
          background-color: #fff;
          color: hsl(210, 8%, 5%);
          border: 1px solid var(--black-200);
          border-radius: 3px;
        }
      }

      .qc-form-body {
        height: 250px;
        margin-top: 30px;
      }
    }
  }

  .qc-form.flexstart {
    align-items: flex-start;
    margin: 20px 0 50px;
  }
`;

const AskQuestionForm = ({
  askTitle,
  askTitleSet,
  askBody,
  askBodySet,
  handleSubmit,
}) => {
  return (
    <>
      <QCFormCommon>
        <div className="qc-form">
          <div>
            <div className="qc-form-title">
              <label htmlFor="title">Title</label>
              <label htmlFor="title">
                Be specific and imagine you’re asking a question to another
                person.
              </label>
            </div>
            <div>
              <input
                id="title"
                type="text"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                value={askTitle}
                onChange={(event) => askTitleSet(event.target.value)}
              ></input>
            </div>
          </div>
          <RecommendTitle />
        </div>
      </QCFormCommon>
      <QCFormCommon>
        <div className="qc-form flexstart">
          <div>
            <div className="qc-form-title">
              <label htmlFor="qc-body">
                What are the details of your problem?
              </label>
              <label htmlFor="qc-body">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </label>
            </div>
            <div className="qc-form-body">
              <input
                id="qc-body"
                type="text"
                value={askBody}
                onChange={(event) => askBodySet(event.target.value)}
              ></input>
            </div>
          </div>
          <RecommendBody />
        </div>
      </QCFormCommon>
      <div className="qc-submit-button">
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
          onClick={() => handleSubmit(askTitle, askBody)}
        >
          Post your question
        </CommonButton>
      </div>
    </>
  );
};

export default AskQuestionForm;
