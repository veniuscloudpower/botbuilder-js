/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ExpressionEvaluator } from '../expressionEvaluator';
import { ExpressionType } from '../expressionType';
import { InternalFunctionUtils } from '../functionUtils.internal';
import { ReturnType } from '../returnType';

/**
 * Operate on each element and return the new collection.
 */
export class Foreach extends ExpressionEvaluator {
    public constructor() {
        super(ExpressionType.Foreach, InternalFunctionUtils.foreach, ReturnType.Array, InternalFunctionUtils.validateForeach);
    }
}