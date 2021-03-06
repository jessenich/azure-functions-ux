import { StacksService20200501 } from '../../../../stacks/2020-05-01/service/StackService';
import {
  validateCreateStackLength,
  validateConfigStackLength,
  validateGithubActionStackLength,
  validateConfigWindowsStackLength,
  validateConfigLinuxStackLength,
  validateGithubActionWindowsStackLength,
  validateGithubActionLinuxStackLength,
  validateASPCreateStack,
  validateNodeCreateStack,
  validatePythonCreateStack,
  validatePHPCreateStack,
  validateDotnetCoreCreateStack,
  validateRubyCreateStack,
  validateJava8CreateStack,
  validateJava11CreateStack,
  validateASPWindowsConfigStack,
  validateNodeWindowsConfigStack,
  validatePythonWindowsConfigStack,
  validatePHPWindowsConfigStack,
  validateDotnetCoreWindowsConfigStack,
  validateJavaWindowsConfigStack,
  validateJavaContainersWindowsConfigStack,
  validateNodeLinuxConfigStack,
  validatePythonLinuxConfigStack,
  validatePHPLinuxConfigStack,
  validateDotnetCoreLinuxConfigStack,
  validateRubyLinuxConfigStack,
  validateJava8LinuxConfigStack,
  validateJava11LinuxConfigStack,
} from './validations';

const stacksService = new StacksService20200501();

describe('WebApp Stacks Test 2020-05-01', () => {
  // Test length of create stacks
  describe('Test Create stack length', () => {
    it('should validate all create stacks are returned', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateCreateStackLength(stacks);
      done();
    });
  });

  // Test length of config stacks
  describe('Test Config stack length', () => {
    it('should validate all config stacks are returned', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateConfigStackLength(stacks);
      done();
    });
  });

  // Test length of config stacks windows
  describe('Test Config stack length for Windows', () => {
    it('should validate all config stacks with windows are returned', done => {
      const stacks = stacksService.getWebAppConfigStacks('windows');
      validateConfigWindowsStackLength(stacks);
      done();
    });
  });

  // Test length of config stacks linux
  describe('Test Config stack length for Linux', () => {
    it('should validate all config stacks with linux are returned', done => {
      const stacks = stacksService.getWebAppConfigStacks('linux');
      validateConfigLinuxStackLength(stacks);
      done();
    });
  });

  // Test length of github action stacks
  describe('Test GitHub Actions stack length', () => {
    it('should validate all GitHub Action stacks are returned', done => {
      const stacks = stacksService.getWebAppGitHubActionStacks();
      validateGithubActionStackLength(stacks);
      done();
    });
  });

  // Test length of github action stacks windows
  describe('Test GitHub Actions stack length for Windows', () => {
    it('should validate all GitHub Action stacks with windows are returned', done => {
      const stacks = stacksService.getWebAppGitHubActionStacks('windows');
      validateGithubActionWindowsStackLength(stacks);
      done();
    });
  });

  // Test length of github action stacks linux
  describe('Test GitHub Actions stack length for Linux', () => {
    it('should validate all GitHub Action stacks with linux are returned', done => {
      const stacks = stacksService.getWebAppGitHubActionStacks('linux');
      validateGithubActionLinuxStackLength(stacks);
      done();
    });
  });

  // Test ASP stack Create/GHA
  describe('Test the Create/GitHub Action ASP stack', () => {
    it('should validate the ASP stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateASPCreateStack(stacks);
      done();
    });
  });

  // Test Node stack Create/GHA
  describe('Test the Create/GitHub Action Node stack', () => {
    it('should validate the Node stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateNodeCreateStack(stacks);
      done();
    });
  });

  // Test Python stack Create/GHA
  describe('Test the Create/GitHub Action Python stack', () => {
    it('should validate the Python stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validatePythonCreateStack(stacks);
      done();
    });
  });

  // Test PHP stack Create/GHA
  describe('Test the Create/GitHub Action PHP stack', () => {
    it('should validate the PHP stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validatePHPCreateStack(stacks);
      done();
    });
  });

  // Test .NET Core stack Create/GHA
  describe('Test the Create/GitHub Action .NET Core stack', () => {
    it('should validate the .NET Core stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateDotnetCoreCreateStack(stacks);
      done();
    });
  });

  // Test Ruby stack Create/GHA
  describe('Test the Create/GitHub Action Ruby stack', () => {
    it('should validate the Ruby stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateRubyCreateStack(stacks);
      done();
    });
  });

  // Test Java 8 stack Create/GHA
  describe('Test the Create/GitHub Action Java 8 stack', () => {
    it('should validate the Java 8 stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateJava8CreateStack(stacks);
      done();
    });
  });

  // Test Java 11 stack Create/GHA
  describe('Test the Create/GitHub Action Java 11 stack', () => {
    it('should validate the Java 11 stack for Create and GitHub Actions', done => {
      const stacks = stacksService.getWebAppCreateStacks();
      validateJava11CreateStack(stacks);
      done();
    });
  });

  // Test ASP Windows stack Config
  describe('Test the Config Windows ASP stack', () => {
    it('should validate the Windows ASP stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateASPWindowsConfigStack(stacks);
      done();
    });
  });

  // Test Node Windows stack Config
  describe('Test the Config Windows Node stack', () => {
    it('should validate the Windows Node stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateNodeWindowsConfigStack(stacks);
      done();
    });
  });

  // Test Python Windows stack Config
  describe('Test the Config Windows Python stack', () => {
    it('should validate the Windows Python stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validatePythonWindowsConfigStack(stacks);
      done();
    });
  });

  // Test PHP Windows stack Config
  describe('Test the Config Windows PHP stack', () => {
    it('should validate the Windows PHP stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validatePHPWindowsConfigStack(stacks);
      done();
    });
  });

  // Test .NET Core Windows stack Config
  describe('Test the Config Windows .NET Core stack', () => {
    it('should validate the Windows .NET Core stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateDotnetCoreWindowsConfigStack(stacks);
      done();
    });
  });

  // Test Java Windows stack Config
  describe('Test the Config Windows Java stack', () => {
    it('should validate the Windows Java stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateJavaWindowsConfigStack(stacks);
      done();
    });
  });

  // Test Java Containers Windows stack Config
  describe('Test the Config Windows Java Containers stack', () => {
    it('should validate the Windows Java Containers stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateJavaContainersWindowsConfigStack(stacks);
      done();
    });
  });

  // Test Node Linux stack Config
  describe('Test the Config Linux Node stack', () => {
    it('should validate the Linux Node stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateNodeLinuxConfigStack(stacks);
      done();
    });
  });

  // Test Python Linux stack Config
  describe('Test the Config Linux Python stack', () => {
    it('should validate the Linux Python stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validatePythonLinuxConfigStack(stacks);
      done();
    });
  });

  // Test PHP Linux stack Config
  describe('Test the Config Linux PHP stack', () => {
    it('should validate the Linux PHP stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validatePHPLinuxConfigStack(stacks);
      done();
    });
  });

  // Test .NET Core Linux stack Config
  describe('Test the Config Linux .NET Core stack', () => {
    it('should validate the Linux .NET Core stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateDotnetCoreLinuxConfigStack(stacks);
      done();
    });
  });

  // Test Ruby Linux stack Config
  describe('Test the Config Linux Ruby stack', () => {
    it('should validate the Linux Ruby stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateRubyLinuxConfigStack(stacks);
      done();
    });
  });

  // Test Java 8 Linux stack Config
  describe('Test the Config Linux Java 8 stack', () => {
    it('should validate the Linux Java 8 stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateJava8LinuxConfigStack(stacks);
      done();
    });
  });

  // Test Java 11 Linux stack Config
  describe('Test the Config Linux Java 11 stack', () => {
    it('should validate the Linux Java 11 stack for Config', done => {
      const stacks = stacksService.getWebAppConfigStacks();
      validateJava11LinuxConfigStack(stacks);
      done();
    });
  });
});
