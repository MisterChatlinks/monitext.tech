import { useAddSnackBar } from "#context/useSnackBarPopUp.tsx";

export function SnackTest() {
  const addSnackBar = useAddSnackBar();
  return (
    <div className="test-container p-4 gap-2 bg-gray-100 rounded shadow flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4">Snack Bar Test</h2>
      <button
        type="button"
        onClick={() => {
          addSnackBar("info", "This is a test snack bar");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Snack
      </button>
      <button
        type="button"
        onClick={() => {
          addSnackBar("success", "This is a success snack bar");
        }}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
      >
        Test Success Snack
      </button>
      <button
        type="button"
        onClick={() => {
          addSnackBar("error", "This is an error snack bar");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
      >
        Test Error Snack
      </button>
        <button
            type="button"
            onClick={() => {
            addSnackBar("info", "This snack bar will auto-fade", true);
            }}
            className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
        >
            Test Auto-Fade Snack
        </button>
      <p className="mt-4 text-sm text-gray-600">
        Click the buttons to trigger snack bars. The auto-fade snack will disappear after 3 seconds.
      </p>
    </div>
  );
}
