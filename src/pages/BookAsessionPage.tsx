import BookASession from "../components/contact/BookAsession"

const BookAsessionPage: React.FC = () => {
  return (
    <div className="pt-20 pb-10 min-h-screen bg-background/50">
      <BookASession calendlyUrl="https://calendly.com/tsoukala-emiliana/new-meeting" />
    </div>
  );
};

export default BookAsessionPage;