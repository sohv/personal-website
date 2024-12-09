import Heading from '../components/Heading';

const ResumePage = () => {
  return (
    <div className="flex flex-col items-start justify-start p-2">
      <Heading>My Resume</Heading>

      <div className="w-full max-w-[1000px] h-[700px] border border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="https://drive.google.com/file/d/1BpMX66uPXd31Idz9JRc4lsu-_TgtjR6G/preview"
          width="100%"
          height="100%"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePage;


  // resume link : https://drive.google.com/file/d/1BpMX66uPXd31Idz9JRc4lsu-_TgtjR6G/preview