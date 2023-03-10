import {App} from "~/meta/interfaces/interfaces";
import {Document} from "yaml";
import {watchEffect, isRef, unref, ref} from "vue";
import {useAppStore} from "~/stores/app";

export function usePortainerTemplate(app: App) {

    const template = ref<any>(null);

    function renderTemplate() {
        app = unref(app);

        return template.value = JSON.stringify({
            type: 2,
            title: app.name,
            description: app.description,
            note: 'Generated by SH-Apps-Meta',
            platform: 'linux',
            logo: app.icon,
            categories: [...app?.categories ?? [],'sh-apps-meta'],
            env: app.containers.flatMap((container) => {
                return container.env?.map((env) => {
                    return {
                        name: env.id,
                        label: env.id,
                        description: env.description,
                        default: env.default,
                    }
                });
            }),
            repository: {
                url: "https://github.com/tylergets/selfhosted-apps-meta",
                stackfile: `content/portainer/stack/${app.id}.yml`
            }
        }, null, 4);
    }

    if (isRef(app)) {
        watchEffect(renderTemplate)
    } else {
        renderTemplate()
    }

    return {
        template
    }
}