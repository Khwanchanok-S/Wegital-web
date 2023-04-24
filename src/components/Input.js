export default function Input({ type, name, value, onChange, error }) {
  return (
    <>
      <input
        type={type || 'text'}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          error ? 'is-invalid' : ''
        } `}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-600"> {error}</div>}
    </>
  );
}
