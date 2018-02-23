
tell application "Terminal"
  activate

  set t to 5

  my createTab()
  delay t
  do script "cd client && sleep " & (t * 3) & " && npm start" in window 1

  my createTab()
  delay t
  do script "cd client" in window 1

  my createTab()
  delay t
  do script "cd server && npm start" in window 1

  my createTab()
  delay t
  do script "cd server" in window 1
end tell


on createTab()
  tell application "System Events" to keystroke "t" using command down
end createTab
