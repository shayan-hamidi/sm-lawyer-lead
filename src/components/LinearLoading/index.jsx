const { useState, useEffect } = require("react");

const LinearLoading = ({ steps, onCompleted }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        onCompleted();
      }, 800);
    }
  }, [currentStep, steps, onCompleted]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        direction: "ltr",
      }}
      className="absolute bottom-0 border border-b-0 border-r-0 border-l-0 border-[#d1564d]"
    >
      <div
        style={{
          height: "20px",
          width: `${(currentStep / steps) * 100}%`,
          backgroundColor: "#d1564d",
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  );
};
export { LinearLoading };
