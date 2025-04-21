import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Info } from "lucide-react";

const Disclaimer = () => {
  return (
    <Alert className="bg-blue-50 border-blue-200 mb-8">
      <Info className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-800">تنويه هام</AlertTitle>
      <AlertDescription className="text-blue-700">
        <p className="mb-2">
          هذا الموقع يقدم معلومات مالية وتعليمية فقط. لا يعتبر نصيحة استثمارية أو مالية مهنية.
        </p>
        <p className="mb-2">
          جميع المحتوى يتم مراجعته من قبل خبراء ماليين معتمدين، لكن يجب عليك دائماً استشارة مستشار مالي مؤهل قبل اتخاذ أي قرارات استثمارية.
        </p>
        <p>
          نحن لا نضمن أي نتائج محددة من تطبيق المعلومات المقدمة في هذا الموقع.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer; 