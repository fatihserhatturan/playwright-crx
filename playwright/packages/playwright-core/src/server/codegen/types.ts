/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { BrowserContextOptions, LaunchOptions } from '../../../types/types';
import type { Language } from '../../utils';
import type * as actions from '@recorder/actions';
export type { Language } from '../../utils';

export type LanguageGeneratorOptions = {
  browserName: string;
  launchOptions: LaunchOptions;
  contextOptions: BrowserContextOptions;
  deviceName?: string;
  saveStorage?: string;
};

export interface LanguageGenerator {
  id: string;
  groupName: string;
  name: string;
  highlighter: Language;
  generateHeader(options: LanguageGeneratorOptions, includeContext?: boolean): string;
  generateAction(actionInContext: actions.ActionInContext): string;
  generateFooter(saveStorage: string | undefined): string;
}
