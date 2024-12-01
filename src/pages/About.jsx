export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          {/* <h1 className='text-3xl font font-semibold text-center my-7'>
            About Blogify
          </h1> */}
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Blogify! This is a real-world blog writing web application designed to provide a platform for sharing thoughts and ideas with the world. Our community consists of passionate writers who love to write about technology, coding, and a wide range of other topics.
            </p>

            <p>
              On this blog, you will find various articles on topics such as web development, software engineering, programming languages, and much more. Our authors are always learning and exploring new technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
