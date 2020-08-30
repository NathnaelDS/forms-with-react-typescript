import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Action, State } from "../App";

export type Step3Inputs = {
  whichApplicant: string;
  centrelink: string;
  employed: string;
  employmentStatus: string;
  residentialAddress: string;
  industry: string;
  years: string;
  months: string;
};

type Props = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

function Step3({ state, dispatch }: Props) {
  const { register, handleSubmit, watch, getValues, errors } = useForm<
    Step3Inputs
  >({
    defaultValues: { ...state.step3 },
  });

  const watchCentreLinkPayment = watch("centrelink");

  useEffect(() => {
    console.log(watchCentreLinkPayment);
  }, [watchCentreLinkPayment]);

  const onSubmit = (data: Step3Inputs) => {
    editForm(data);
    console.log(data);

    // TODO: Confirmation for form completion
  };

  const editForm = (data: Step3Inputs) => {
    // TODO: Update Reducer State
    dispatch({
      type: "SET_STEP_3",
      payload: {
        step: 2,
        step3: { ...data },
      },
    });
  };

  return (
    <>
      <div>
        <div className="text-5xl">03</div>
        <div className="text-2xl">Income</div>
      </div>
      <form className="grid justify-start" onSubmit={handleSubmit(onSubmit)}>
        {/* WHICH APPLICANT */}
        <div className="mb-5">
          <div>Which applicant's income are you reporting?</div>
          <input
            name="whichApplicant"
            id="primary"
            type="radio"
            value="primary"
            ref={register({ required: true })}
          />
          <label htmlFor="primary" className="ml-2 mr-8">
            primary
          </label>

          <input
            name="whichApplicant"
            id="secondary"
            type="radio"
            value="secondary"
            ref={register({ required: true })}
          />
          <label htmlFor="secondary" className="ml-2">
            secondary
          </label>
          {errors.whichApplicant && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        {/* CENTRELINK SUPPORT PAYMENTS */}
        <div className="mb-5">
          <div>Do you receive CentreLink support payments?</div>
          <input
            name="centrelink"
            id="centrelinkYes"
            type="radio"
            value="yes"
            ref={register({ required: true })}
          />
          <label htmlFor="centrelinkYes" className="ml-2 mr-8">
            yes
          </label>

          <input
            name="centrelink"
            id="centrelinkNo"
            type="radio"
            value="no"
            ref={register({ required: true })}
          />
          <label htmlFor="centrelinkNo" className="ml-2">
            no
          </label>
          {errors.centrelink && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        {watchCentreLinkPayment === "yes" && (
          <div className="text-lg font-bold">YESSIR</div>
        )}

        {/* EMPLOYED */}
        <div className="grid mb-5">
          <label htmlFor="employed">Are you employed?</label>
          <select
            className="p-2 mt-1 border rounded-lg"
            name="employed"
            id="employed"
            ref={register({ required: true })}
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
          {errors.employed && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        {/* EMPLOYMENT STATUS */}
        <div className="grid mb-5">
          <label htmlFor="employmentStatus">Employment Status</label>
          <select
            className="p-2 mt-1 border rounded-lg"
            name="employmentStatus"
            id="employmentStatus"
            ref={register({ required: true })}
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
          {errors.employmentStatus && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        {/* YEARLY PRETAX INCOME */}
        <div className="grid mb-5">
          <label htmlFor="residentialAddress">residentialAddress</label>
          <input
            className="p-2 mt-1 border rounded-lg"
            name="residentialAddress"
            id="residentialAddress"
            defaultValue="34,000"
            type="number"
            ref={register({ required: true })}
          />
          {errors.residentialAddress && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        {/* INDUSTRY */}
        <div className="grid mb-5">
          <label htmlFor="industry">What industry do you work in?</label>
          <input
            className="p-2 mt-1 border rounded-lg"
            name="industry"
            id="industry"
            defaultValue="Hospitality"
            ref={register({ required: true })}
          />
          {errors.industry && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        <div>How long have you been working here?</div>
        <div className="flex mt-1 mb-5">
          {/* YEAR */}
          <select
            className="w-32 p-2 mr-6 border rounded-lg"
            name="years"
            id="years"
            ref={register({ required: true })}
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>

          {/* MONTHS */}
          <select
            className="w-32 p-2 border rounded-lg"
            name="months"
            id="months"
            ref={register}
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
          {errors.years && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
          {errors.months && (
            <div className="text-sm font-bold text-red-400">
              This field is required
            </div>
          )}
        </div>

        <div className="flex space-x-12">
          <input
            onClick={async () => {
              const formValues = getValues();
              console.log("formValues", formValues);
              // const valid = await trigger();

              dispatch({
                type: "SET_STEP_3",
                payload: {
                  step: 2,
                  step3: { ...formValues },
                },
              });

              // TODO: Let people go back if it's not valid?
              // if (valid) {
              // }
            }}
            type="submit"
            value="Back"
            className="px-10 py-2 font-bold text-gray-700 bg-white rounded-lg"
          />
          <input
            // onClick={() => dispatch({ type: "STEP-2" })}
            type="submit"
            value="Save and Continue"
            className="px-10 py-2 font-bold text-white bg-blue-500 rounded-lg"
          />
        </div>
      </form>
    </>
  );
}

export default Step3;
