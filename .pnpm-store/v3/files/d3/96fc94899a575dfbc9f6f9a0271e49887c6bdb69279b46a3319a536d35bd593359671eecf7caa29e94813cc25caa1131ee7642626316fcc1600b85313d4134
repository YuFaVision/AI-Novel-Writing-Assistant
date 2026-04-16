import { getThreadMessageText } from "../../utils/text.js";
import { BaseComposerRuntimeCore } from "./base-composer-runtime-core.js";
export class DefaultEditComposerRuntimeCore extends BaseComposerRuntimeCore {
    runtime;
    endEditCallback;
    get canCancel() {
        return true;
    }
    getAttachmentAdapter() {
        return this.runtime.adapters?.attachments;
    }
    getDictationAdapter() {
        return this.runtime.adapters?.dictation;
    }
    _nonTextParts;
    _previousText;
    _parentId;
    _sourceId;
    constructor(runtime, endEditCallback, { parentId, message }) {
        super();
        this.runtime = runtime;
        this.endEditCallback = endEditCallback;
        this._parentId = parentId;
        this._sourceId = message.id;
        this._previousText = getThreadMessageText(message);
        this.setText(this._previousText);
        this.setRole(message.role);
        this.setAttachments(message.attachments ?? []);
        this._nonTextParts = message.content.filter((part) => part.type !== "text");
        this.setRunConfig({ ...runtime.composer.runConfig });
    }
    async handleSend(message) {
        const text = getThreadMessageText(message);
        if (text !== this._previousText) {
            this.runtime.append({
                ...message,
                content: [...message.content, ...this._nonTextParts],
                parentId: this._parentId,
                sourceId: this._sourceId,
            });
        }
        this.handleCancel();
    }
    handleCancel() {
        this.endEditCallback();
        this._notifySubscribers();
    }
}
//# sourceMappingURL=default-edit-composer-runtime-core.js.map