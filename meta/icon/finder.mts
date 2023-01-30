export default function findIconForName(name: string) {
    // Replace dashes
    name = name.replace("-ng", "");
    name = name.replace(/-/g, '');
    // Replace "-ng"

    return `https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/${name}.png`
}