- Create Basic UI

  - Container View
  - Progress View (absolute positioned)
    - width: variable percentage (e.g. 30%)
  - Text centered
  - 2 Buttons

- State variable to display text (integer between 0 and 100)
- Buttons should increase / decrease state
- SharedValue that gets set synchronously to the state variable

  - Two options:
    - Whenever we change the state, we also change the SharedValue
    - Create a useEffect "listening"

- UI tweaking
