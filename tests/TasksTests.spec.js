import { test, expect } from '@playwright/test';
import { TasksPage } from '../Pages/TasksPage';
import { LoginPage } from '../Pages/LoginPage';
import { SignUpPage} from '../Pages/SignUpPage'; 

function getUserName() {
    const currentDate = new Date();
    return "user"+ currentDate.getTime();

}

test('User should be able to signup to the application', async ({ page }) => {
    const userName = getUserName();
    var signUpPage = new SignUpPage(page);

    await signUpPage.signUp(userName);   

    await expect( page.getByRole('cell', { name: 'No Task Added. Please add a task' })).toBeVisible();
});

test('User should be able to login to the aplication', async ({ page }) => {
    var loginPage = new LoginPage(page);

    await loginPage.login("user1690817046316", "123456");

    await expect(page.getByRole('link', { name: 'user1690817046316'})).toBeVisible();
});

test('User should be able to create a task', async ({ page }) => {
      var signUpPage = new SignUpPage(page);
      var taskName = "My Test Task1 is here2";
      const userName = getUserName();

     await signUpPage.signUp(userName);   

     await page.getByRole('link', { name: 'add a task' }).click();
     await page.getByLabel('Your Task').fill(taskName);
     await page.getByRole('button', { name: 'Save Task' }).click();

     await expect(page.getByRole('cell', { name: taskName })).toBeVisible();
});
  
test('User should be able to Edit a task', async ({ page }) => {
      var signUpPage = new SignUpPage(page);
      var taskPage = new TasksPage(page);
      const userName = getUserName();

      var editableTaskName = "My Test Task63 is here";
      
      await signUpPage.signUp(userName);
      await taskPage.addTask(editableTaskName);
      await taskPage.editTask(editableTaskName);

      var newTaskName = editableTaskName + getUserName();
      await page.getByLabel('Your Task').fill(newTaskName);
      await page.getByRole('button', { name: 'Save Task' }).click();

      await expect(page.getByRole('cell', { name: newTaskName })).toBeVisible();
});

test('User should be able to View a task', async ({ page }) => {
     var taskPage = new TasksPage(page);
     var signUpPage = new SignUpPage(page);
     var taskToView = "Task to be viewed4";
     const userName = getUserName();
      
     await signUpPage.signUp(userName);

     await page.getByRole('link', { name: 'add a task' }).click();
     await page.getByLabel('Your Task').fill(taskToView);
     await page.getByRole('button', { name: 'Save Task' }).click();

     await taskPage.viewTask(taskToView);
     await expect(await page.locator('p.card-text').innerText()).toBe(taskToView);
});

test('User should be able to Delete multiple tasks', async ({ page }) => {
     var taskPage = new TasksPage(page);
     var loginPage = new LoginPage(page);
     var signUpPage = new SignUpPage(page);
     const userName = getUserName();
      
     await signUpPage.signUp(userName);

     await taskPage.addTask('Task to be deleted 1');
     await taskPage.addTask('Task to be deleted 2');
     await taskPage.addTask('Task to be deleted 3');

     await taskPage.deleteTask('Task to be deleted 2');
     await taskPage.deleteTask('Task to be deleted 3');


     await expect(page.locator("//tbody//tr")).toHaveCount(1);
     await expect(page.locator("//td[text()='Task to be deleted 1']")).toHaveCount(1);
     await expect(page.locator("//td[text()='Task to be deleted 2']")).toHaveCount(0);
     await expect(page.locator("//td[text()='Task to be deleted 3']")).toHaveCount(0);
});
    