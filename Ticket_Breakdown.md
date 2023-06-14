# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- ### Ticket 1: Update agent table with respective factory_agent_id
  Description: Add a column of factory_agent_id in the agent table, it should be unique and have a many to 1 relation between agent and factory. Updates are required to be made on the agent model and migrations if using a relational db. <br/>
  Points: 2

- ### Ticket 2: Create function saveFactoryAgentId
  Description: This function is supposed to save custom factory id for each agents. It can be created in multiple ways, a versatile option would be a function that takes in factory_id, array of agent ids and a regex or another function that dictates the logic on how to form the unique id for each agent. <br/>
  Points: 3

- ### Ticket 3: Update shiftsByFacility function to include the factory_agent_id in the agent metadata
  Description: Update the existing function logic to include the newly created factory_agent_id in the agent meta data. <br/>
  Points: 1/3 depending on the complexity of the function to summarise agent metadata formatting

- ### Ticket 4: Update generateReports function to show factory_agent_id instead of internal agent id
  Description: Update the generateReports function to replace all the places in logic where the internal database id for each agent with the factory_agent_id created for each. <br/>
  Points: 2/5 depending on the complexity of the function

- ### Ticket 5: (Optional) Update exisiting agent records with factory_agent_id
  Description: Once the tables and functions are updated, and factory_agent_id will be required field for all the functions to run properly, all the existing records are required to be updated with respective factory_agent_id using a one time functions. <br/>
  Points: 2
