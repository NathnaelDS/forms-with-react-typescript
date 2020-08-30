import React from "react";
import { useForm } from "react-hook-form";
import { Action, State } from "../App";

export type Step1Inputs = {
  loanType: string;
  loanAmount: string;
  enquiryFor: string;
  additionalInfo: string;
};

type Props = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

function Step1({ state, dispatch }: Props) {
  const { register, handleSubmit, watch, errors } = useForm<Step1Inputs>({
    defaultValues: {
      ...state.step1,
    },
  });

  const onSubmit = (data: Step1Inputs) => {
    // TODO: make a IF -> /create or /edit
    editForm(data);

    console.log(data);
  };

  const createForm = () => {
    // TODO: Is Reducer update needed???
    // dispatch({ type: "STEP-2" });
    // TODO: Do createForm mutation
    // createForm()
    // TODO: Go to /edit/EnquiryID
    // history.push("/edit/EnquiryID")
  };

  const editForm = (data: Step1Inputs) => {
    // TODO: Update Reducer State
    dispatch({
      type: "SET_STEP_1",
      payload: {
        step: 2,
        step1: {
          loanType: data.loanType,
          loanAmount: data.loanAmount,
          enquiryFor: data.enquiryFor,
          additionalInfo: data.additionalInfo,
        },
      },
    });

    // TODO: Do editForm mutation
    // editForm()
  };

  return (
    <>
      <div>
        <div className="text-5xl">01</div>
        <div className="text-2xl">Loan</div>
      </div>
      <form
        className="grid justify-start"
        style={{ justifyContent: "stretch" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* loanType */}
        <label htmlFor="loanType">Loan Type</label>
        <input
          className="p-2 mt-1 mb-5 border rounded-lg "
          name="loanType"
          id="loanType"
          placeholder="Home Loan"
          // defaultValue={state.step1?.loanType}
          ref={register}
        />

        {/* loanAmount */}
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          className="p-2 mt-1 mb-5 border rounded-lg"
          name="loanAmount"
          id="loanAmount"
          // defaultValue={state.step1?.loanAmount}
          ref={register({ required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.loanAmount && <span>This field is required</span>}

        <div className="mb-5">
          <div>Who is this enquiry for?</div>
          <input
            name="enquiryFor"
            id="enquiry-myself"
            type="radio"
            value="Myself"
            // defaultChecked={state.step1?.enquiryFor === "Myself" ? true : false}
            ref={register({ required: true })}
          />
          <label htmlFor="enquiry-myself" className="ml-2 mr-8">
            Myself
          </label>

          {console.log(state.step1?.enquiryFor)}
          <input
            name="enquiryFor"
            id="enquiry-someone-else"
            type="radio"
            value="Someone Else"
            // defaultChecked={
            //   state.step1?.enquiryFor === "Someone Else" ? true : false
            // }
            ref={register({ required: true })}
          />
          <label htmlFor="enquiry-someone-else" className="ml-2">
            Someone Else
          </label>
        </div>
        {errors.enquiryFor && <span>This field is required</span>}

        <label className="font-bold text-red-700" htmlFor="additionalInfo">
          Additional Info
        </label>
        <textarea
          className="p-2 mt-1 mb-5 border rounded-lg "
          name="additionalInfo"
          id="additionalInfo"
          cols={30}
          rows={10}
          // defaultValue={state.step1?.additionalInfo}
          ref={register({ required: true })}
        ></textarea>

        <input
          // onClick={() => createForm()}
          type="submit"
          value="Save and Continue"
          className="py-2 font-bold text-white bg-blue-500 rounded-lg"
        />
      </form>
    </>
  );
}

export default Step1;
