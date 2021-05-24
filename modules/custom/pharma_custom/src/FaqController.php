<?php
namespace Drupal\pharma_custom\Controller;

use Symfony\Component\HttpFoundation\Response;
use Drupal\Core\Controller\ControllerBase;

/**
 * Class FaqController.
 */
class FaqController extends ControllerBase
{

  /**
   * Index.
   *
   * @return string
   *   Return Hello string.
   */
  public function index() {
    return [
      '#theme' => 'pharma_faq',
      '#type' => 'markup',
      '#markup' => $this->t('Implement method: index')
    ];
  }
}
