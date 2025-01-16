const fetchDashboardData = async () => {
  return {
    tools: 0,
    students: 0,
    borrowed: 0,
    available: 0,
    borrowing: 0,
    completed: 0,
  };
};

export default function Dashboard({ dashboardData = {} }) {
  const { tools = 0, students = 0, borrowed = 0, available = 0, borrowing = 0, completed = 0 } = dashboardData;
  return (
    <div className="px-24">
      <div className="text-4xl text-center my-4 text-black font-bold">Dashboard</div>
      <div className="grid grid-cols-2 gap-8">
        {/* Tools */}
        <div className="w-full py-12 gap-16 flex justify-center items-center bg-white font-bold text-black rounded shadow">
          <div className="text-5xl">{tools}</div>
          <div className="text-xl">Tools</div>
        </div>
        {/* Students */}
        <div className="w-full py-12 gap-16 flex justify-center items-center bg-white font-bold text-black rounded shadow">
          <div className="text-5xl">{students}</div>
          <div className="text-xl">Students</div>
        </div>
        {/* Borrowed-Available */}
        <div className="w-full gap-8 flex justify-center items-center text-center">
          <div className="w-full px-8 py-16 bg-black rounded shadow font-bold">
            <div className="text-white text-5xl">{borrowed}</div>
            <div className="text-white text-xl mt-4">Borrowed</div>
          </div>
          <div className="w-full px-8 py-16 bg-yellow rounded shadow font-bold">
            <div className="text-black text-5xl">{available}</div>
            <div className="text-black text-xl mt-4">Available</div>
          </div>
        </div>
        {/* Borrowing-Completed */}
        <div className="w-full gap-8 flex justify-center items-center text-center">
          <div className="w-full px-8 py-16 bg-black rounded shadow font-bold">
            <div className="text-white text-5xl">{borrowing}</div>
            <div className="text-white text-xl mt-4">Borrowing</div>
          </div>
          <div className="w-full px-8 py-16 bg-yellow rounded shadow font-bold">
            <div className="text-black text-5xl">{completed}</div>
            <div className="text-black text-xl mt-4">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const dashboardData = await fetchDashboardData();
  return {
    props: {
      dashboardData,
    },
  };
}
