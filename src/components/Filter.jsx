import style from "@/styles/todo.module.css";

export const Filter = ({ setFilter, currentFilter }) => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "start" }}>
      {["All", "Active", "Completed"].map((filter, index) => (
        <div key={index}>
          <button
            className={`${style.button2} ${
              currentFilter === filter ? style.activeButton : ""
            }`}
            onClick={() => setFilter(filter)}
          >
            {filter}
          </button>
        </div>
      ))}
    </div>
  );
};
