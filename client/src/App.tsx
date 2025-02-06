import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

// Props Example
function WelcomeMessage({ name }: { name: string }) {
  return <h2>Welcome, {name}!</h2>
}

// Conditional Rendering Example
function LoginStatus({ isLoggedIn }: { isLoggedIn: boolean }) {
  return isLoggedIn ? <h3>You are logged in</h3> : <h3>Please log in.</h3>
}

// ?? New Shared Component: Dashboard
function Dashboard({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      {isLoggedIn ? (
        <p>Welcome to your Dashboard!</p>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  )
}

// Counter Example (State & Event Handling)
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Counter Example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )

  // Or we can write it like this
  // function handleIncrement() {
  //   setCount(count + 1) // Updates the state
  // }
  //
  // return (
  //   <div>
  //     <h3>Counter Example</h3>
  //     <p>Count: {count}</p>
  //     <button onClick={handleIncrement}>Increment</button> {/* Now using the function */}
  //   </div>
  // )
}

// List Rendering Example
const users = ["Han", "Adam", "Aabhash"]

function UserList() {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

// Form Handling Example
function NameForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  return (
    <div>
      <h3>Form Example</h3>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Enter your name"
        style={{ margin: "10px", padding: "5px" }}
      />
      <input
        type="email"
        value={email}
        onChange={handleChangeEmail}
        placeholder="Enter your email"
        style={{ margin: "10px", padding: "5px" }}
      />
      <p>Your name: {name}</p>
      <p>Your email: {email}</p>
    </div>
  )
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <> {/* Centering container */}
      <header>
        <div>
          {/* <a href="https://vite.dev" target="_blank"> */}
          {/*   <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          {/* </a> */}
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>React Features Demo</h1>
      </header>

      <main>
        <WelcomeMessage name="Han" />

        <LoginStatus isLoggedIn={isLoggedIn} />
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <hr />

        <Dashboard isLoggedIn={isLoggedIn} />

        <hr />

        <Counter />

        <hr />

        <UserList />

        <hr />

        <NameForm />
      </main>
    </> /* Close centering container */
  )
}

// Export this component to be called in main.tsx
export default App
