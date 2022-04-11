import './styles/main.scss';
import { showMessage } from './lib/dom';

async function bake() {
    const title = 'Baking cookies';
    let counter = 0;

    console.clear();
    console.group(title);

    counter++;
    console.log(`${counter} - Add ingredients`);
    showMessage(`${counter} - Add ingredients`, title);

    counter++;
    console.log(`${counter} - Mix ingredients`);
    showMessage(`${counter} - Mix ingredients`, title, true);

    const baking = new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log(`${counter} - Bake at 325 degrees for 10 min`);
            showMessage(
                `${counter} - Bake at 325 degrees for 10 min`,
                title,
                true,
            );
            resolve(true);
        }, 1000);
    });

    await baking;

    counter++;
    console.log(`${counter} - Eat ingredients`);
    showMessage(`${counter} - Eat cookies`, title, true);
    console.groupEnd();
}

// @ts-ignore
document.querySelector('#bake-cookies').addEventListener('click', async () => {
    bake();
});
