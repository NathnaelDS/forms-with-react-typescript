import React, { useReducer } from "react";
import Step1, { Step1Inputs } from "./components/Step1";
import Step2, { Step2Inputs } from "./components/Step2";
import Step3, { Step3Inputs } from "./components/Step3";

const initialState: State = { step: 3 };

// const editState = {};

// const editState = {};

export type State = {
  step: 1 | 2 | 3;
  step1?: Step1Inputs;
  step2?: Step2Inputs;
  step3?: Step3Inputs;
};

export type Action =
  | {
      type: "CREATE_FORM";
      payload: {
        loanType: string;
        loanAmount: string;
        enquiryFor: string;
        additionalInfo: string;
      };
    }
  | {
      type: "SET_STEP_1";
      payload: {
        step: 1 | 2 | 3;
        step1: Step1Inputs;
      };
    }
  | {
      type: "SET_STEP_2";
      payload: {
        step: 1 | 2 | 3;
        step2: Step2Inputs;
      };
    }
  | {
      type: "SET_STEP_3";
      payload: {
        step: 1 | 2 | 3;
        step3: Step3Inputs;
      };
    };

const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CREATE_FORM":
      return { ...state, ...action.payload };

    case "SET_STEP_1":
      return {
        ...state,
        step: action.payload.step,
        step1: { ...action.payload.step1 },
      };

    case "SET_STEP_2":
      return {
        ...state,
        step: action.payload.step,
        step2: { ...action.payload.step2 },
      };

    case "SET_STEP_3":
      return {
        ...state,
        step: action.payload.step,
        step3: { ...action.payload.step3 },
      };

    // Submit on step1 on /create
    // Run mutation, get ID and go to /edit/EnquiryID
    // /edit/EnquiryID should populate the state with Step1 values and state {step: 2}

    // /edit/EnquiryID
    // Clicking back or next -> do an update mutation to enquiry
    // {state: +- 1}

    // Populate form
    // Query EnquiryID and add the form inputs into state

    // finalize form
    // Do mutation to finalize the form
    // you can just return state
  }
};

export default function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  //#region comments

  // save onChange, onBlur, onSubmit,

  // fetch on /edit

  // use useReducer
  // pass dispatch,
  // on /create -> createMutation
  // - reducer createMutation action

  // on /edit -> editMutation
  // - reducer editMutation action
  // add watch & conditional inputs

  //#endregion

  return (
    <div
      className="grid justify-center mt-20 text-gray-900"
      style={{ gridTemplateColumns: "300px 400px" }}
    >
      {(() => {
        switch (state.step) {
          case 1:
            return <Step1 state={state} dispatch={dispatch} />;
          case 2:
            return <Step2 state={state} dispatch={dispatch} />;
          case 3:
            return <Step3 state={state} dispatch={dispatch} />;

          default:
            break;
        }
      })()}
    </div>
  );
}
