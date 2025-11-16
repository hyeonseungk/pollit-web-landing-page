"use client";

import { FormEvent, useMemo, useState } from "react";
import { Gnb } from "@/components/Gnb";

const API_ENDPOINT = "https://api.reborn.pollit.kr/delete-my-data";

type FormValues = {
  email: string;
  nickname: string;
  reason: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export function DeleteMyDataPageClient() {
  const [values, setValues] = useState<FormValues>({
    email: "",
    nickname: "",
    reason: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const isEmailValid = useMemo(() => {
    if (!values.email) return false;
    return /.+@.+\..+/.test(values.email);
  }, [values.email]);

  const isFormValid = values.email.trim() !== "" && values.nickname.trim() !== "" && isEmailValid;

  const handleChange = (
    field: keyof FormValues,
    value: string
  ) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (submitState !== "idle") {
      setSubmitState("idle");
      setFeedbackMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      setSubmitState("error");
      setFeedbackMessage("필수 항목을 올바르게 입력해 주세요.");
      return;
    }

    try {
      setSubmitState("loading");
      setFeedbackMessage("");

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email.trim(),
          nickname: values.nickname.trim(),
          reason: values.reason.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("failed");
      }

      setSubmitState("success");
      setFeedbackMessage(
        "요청을 접수했어요! 최대 2일 이내에 안내드릴게요."
      );
      setValues({ email: "", nickname: "", reason: "" });
    } catch (error) {
      console.error(error);
      setSubmitState("error");
      setFeedbackMessage(
        "요청 접수에 실패했어요. 잠시 후 다시 시도하거나 문의해 주세요."
      );
    }
  };

  return (
    <div className="data-delete-page">
      <Gnb />
      <main className="data-delete-hero">
        <div className="container data-delete-container">
          <p className="data-delete-eyebrow">데이터 삭제 요청</p>
          <h1>
            직장인들의 착한 소개팅앱, 폴잇
            <br />
            계정 및 데이터 삭제 요청
          </h1>
          <p className="data-delete-lead">
            계정 및 관련 데이터를 삭제하려면 아래 양식을 작성해 주세요.
            요청이 처리되기까지 최대 2일이 소요될 수 있습니다.
          </p>
          <p className="data-delete-subtext">
            요청이 처리되면 계정 정보와 각종 기록이 즉시 삭제됩니다.
          </p>

          <section className="data-delete-panel">
            <div className="data-delete-panel__text">
              <h2>삭제 요청 전에 확인해 주세요</h2>
              <ul>
                <li>삭제 후에는 서비스 기록을 다시 복구할 수 없어요.</li>
                <li>신속한 처리를 위해 가입 시 사용한 이메일을 입력해 주세요.</li>
                <li>궁금한 점은 언제든지 고객센터로 문의하실 수 있어요.</li>
              </ul>
            </div>

            <form className="data-delete-form" onSubmit={handleSubmit}>
              <div className="data-delete-field">
                <label htmlFor="email">
                  이메일 주소 <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="예) pollit@example.com"
                  required
                  value={values.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                />
                {!isEmailValid && values.email && (
                  <p className="data-delete-helper error">
                    올바른 이메일 주소 형식을 입력해 주세요.
                  </p>
                )}
              </div>

              <div className="data-delete-field">
                <label htmlFor="nickname">
                  닉네임 <span aria-hidden="true">*</span>
                </label>
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  autoComplete="off"
                  placeholder="앱에서 사용한 닉네임"
                  required
                  value={values.nickname}
                  onChange={(event) => handleChange("nickname", event.target.value)}
                />
              </div>

              <div className="data-delete-field">
                <label htmlFor="reason">삭제 요청 사유 (선택)</label>
                <textarea
                  id="reason"
                  name="reason"
                  placeholder="삭제를 요청하는 이유가 있다면 자유롭게 작성해 주세요."
                  rows={4}
                  value={values.reason}
                  onChange={(event) => handleChange("reason", event.target.value)}
                />
              </div>

              <div className="data-delete-submit-wrapper">
                <button
                  type="submit"
                  className="data-delete-submit"
                  disabled={!isFormValid || submitState === "loading"}
                >
                  {submitState === "loading" ? "요청 보내는 중..." : "삭제 요청 보내기"}
                </button>
                <p className="data-delete-helper">
                  버튼을 누르면 입력한 정보가 바로 삭제 요청 API로 전송됩니다.
                </p>
                {feedbackMessage && (
                  <p
                    className={`data-delete-feedback ${
                      submitState === "success" ? "success" : "error"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedbackMessage}
                  </p>
                )}
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

