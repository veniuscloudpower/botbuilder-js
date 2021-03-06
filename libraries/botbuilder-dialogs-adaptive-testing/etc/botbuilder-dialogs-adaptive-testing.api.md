## API Report File for "botbuilder-dialogs-adaptive-testing"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Activity } from 'botbuilder-core';
import { BotAdapter } from 'botbuilder-core';
import { ConversationReference } from 'botbuilder-core';
import { Dialog } from 'botbuilder-dialogs';
import { DialogContext } from 'botbuilder-dialogs';
import { DialogExpression } from 'botbuilder-dialogs-adaptive';
import { DialogTurnResult } from 'botbuilder-dialogs';
import { Expression } from 'adaptive-expressions';
import { IActivity } from 'botbuilder-core';
import { IUserTokenProvider } from 'botbuilder-core';
import { Middleware } from 'botbuilder-core';
import { ResourceExplorer } from 'botbuilder-dialogs-declarative';
import { ResourceResponse } from 'botbuilder-core';
import { StringExpression } from 'adaptive-expressions';
import { TokenResponse } from 'botbuilder-core';
import { TurnContext } from 'botbuilder-core';

// @public (undocumented)
export class AdaptiveTestAdapter extends BotAdapter implements IUserTokenProvider {
    constructor(conversation?: ConversationReference, sendTraceActivity?: boolean);
    activeQueue: Activity[];
    addUserToken(connectionName: string, channelId: string, userId: string, token: string, magicCode?: string): void;
    continueConversation(reference: Partial<ConversationReference>, logic: (revocableContext: TurnContext) => Promise<void>): Promise<void>;
    conversation: ConversationReference;
    static createConversation(name: string, user?: string, bot?: string): ConversationReference;
    deleteActivity(context: TurnContext, reference: ConversationReference): Promise<void>;
    get enableTrace(): boolean;
    set enableTrace(value: boolean);
    getAadTokens(context: TurnContext, connectionName: string, resourceUrls: string[]): Promise<{
        [propertyName: string]: TokenResponse;
    }>;
    getNextReply(): IActivity;
    getSignInLink(context: TurnContext, connectionName: string): Promise<string>;
    getTokenStatus(context: TurnContext, userId: string, includeFilter?: string, oAuthAppCredentials?: any): Promise<[any]>;
    getUserToken(context: TurnContext, connectionName: string, magicCode?: string): Promise<TokenResponse>;
    locale: string;
    makeActivity(text?: string): Activity;
    processActivity(activity: Activity, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    sendActivities(context: TurnContext, activities: Activity[]): Promise<ResourceResponse[]>;
    sendTextToBot(userSays: string, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    signOutUser(context: TurnContext, connectionName: string): Promise<void>;
    updateActivity(context: TurnContext, activity: Activity): Promise<void>;
    use(middleware: Middleware): this;
    }

// @public (undocumented)
export class AssertCondition<O extends object = {}> extends Dialog<O> {
    // (undocumented)
    beginDialog(dc: DialogContext, options?: O): Promise<DialogTurnResult>;
    condition: Expression;
    description: StringExpression;
    // (undocumented)
    protected onComputeId(): string;
}

// @public (undocumented)
export class AssertReply extends AssertReplyActivity {
    exact: boolean;
    // (undocumented)
    getConditionDescription(): string;
    text: string;
    // (undocumented)
    validateReply(activity: Activity): void;
}

// @public (undocumented)
export class AssertReplyActivity implements TestAction {
    assertions: string[];
    description: string;
    // (undocumented)
    execute(testAdapter: AdaptiveTestAdapter, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    // (undocumented)
    getConditionDescription(): string;
    timeout: number;
    // (undocumented)
    validateReply(activity: Activity): void;
}

// @public (undocumented)
export class AssertReplyOneOf extends AssertReplyActivity {
    exact: boolean;
    // (undocumented)
    getConditionDescription(): string;
    text: string[];
    // (undocumented)
    validateReply(activity: Activity): void;
}

// @public (undocumented)
export interface TestAction {
    // (undocumented)
    execute(adapter: AdaptiveTestAdapter, callback: (context: TurnContext) => Promise<any>): any;
}

// @public (undocumented)
export class TestRunner {
    constructor(resourcePath: string);
    // (undocumented)
    runTestScript(testName: string): Promise<any>;
    }

// @public (undocumented)
export class TestScript {
    description: string;
    dialog: DialogExpression;
    enableTrace: boolean;
    execute(resourceExplorer: ResourceExplorer, testName?: string, testAdapter?: AdaptiveTestAdapter): Promise<void>;
    locale: string;
    script: TestAction[];
}

// @public (undocumented)
export class UserActivity implements TestAction {
    activity: Activity;
    // (undocumented)
    execute(testAdapter: AdaptiveTestAdapter, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    user: string;
}

// @public (undocumented)
export interface UserActivityConfiguration {
    // (undocumented)
    activity?: Activity;
    // (undocumented)
    user?: string;
}

// @public (undocumented)
export class UserConversationUpdate implements TestAction {
    // (undocumented)
    execute(testAdapter: AdaptiveTestAdapter, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    membersAdded: string[];
    membersRemoved: string[];
}

// @public (undocumented)
export class UserDelay implements TestAction {
    // (undocumented)
    execute(_testAdapter: AdaptiveTestAdapter, _callback: (context: TurnContext) => Promise<any>): Promise<any>;
    timespan: number;
}

// @public (undocumented)
export interface UserDelayConfiguration {
    // (undocumented)
    timespan?: number;
}

// @public (undocumented)
export class UserSays implements TestAction {
    // (undocumented)
    execute(testAdapter: AdaptiveTestAdapter, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    text: string;
    user: string;
}

// @public (undocumented)
export class UserTyping implements TestAction {
    // (undocumented)
    execute(testAdapter: AdaptiveTestAdapter, callback: (context: TurnContext) => Promise<any>): Promise<any>;
    user: string;
}


// (No @packageDocumentation comment for this package)

```
